/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { edit, seen } from '@wordpress/icons';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useViewportMatch } from '@wordpress/compose';
import { BlockEditorProvider } from '@wordpress/block-editor';
import { useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import SidebarNavigationScreen from '../sidebar-navigation-screen';
import StyleVariationsContainer from '../global-styles/style-variations-container';
import { unlock } from '../../lock-unlock';
import { store as editSiteStore } from '../../store';
import SidebarButton from '../sidebar-button';
import StyleBook from '../style-book';
import useGlobalStylesRevisions from '../global-styles/screen-revisions/use-global-styles-revisions';
import SidebarNavigationScreenDetailsFooter from '../sidebar-navigation-screen-details-footer';

const noop = () => {};

function SidebarNavigationScreenGlobalStylesContent() {
	const { storedSettings } = useSelect( ( select ) => {
		const { getSettings } = unlock( select( editSiteStore ) );

		return {
			storedSettings: getSettings(),
		};
	}, [] );

	// Wrap in a BlockEditorProvider to ensure that the Iframe's dependencies are
	// loaded. This is necessary because the Iframe component waits until
	// the block editor store's `__internalIsInitialized` is true before
	// rendering the iframe. Without this, the iframe previews will not render
	// in mobile viewport sizes, where the editor canvas is hidden.
	return (
		<BlockEditorProvider
			settings={ storedSettings }
			onChange={ noop }
			onInput={ noop }
		>
			<StyleVariationsContainer />
		</BlockEditorProvider>
	);
}

export default function SidebarNavigationScreenGlobalStyles() {
	const { revisions, isLoading: isLoadingRevisions } =
		useGlobalStylesRevisions();
	const { openGeneralSidebar, setIsListViewOpened } =
		useDispatch( editSiteStore );
	const isMobileViewport = useViewportMatch( 'medium', '<' );
	const { setCanvasMode, setEditorCanvasContainerView } = unlock(
		useDispatch( editSiteStore )
	);
	const { isViewMode, isStyleBookOpened, revisionsCount } = useSelect(
		( select ) => {
			const { getCanvasMode, getEditorCanvasContainerView } = unlock(
				select( editSiteStore )
			);
			const { getEntityRecord, __experimentalGetCurrentGlobalStylesId } =
				select( coreStore );
			const globalStylesId = __experimentalGetCurrentGlobalStylesId();
			const globalStyles = globalStylesId
				? getEntityRecord( 'root', 'globalStyles', globalStylesId )
				: undefined;
			return {
				isViewMode: 'view' === getCanvasMode(),
				isStyleBookOpened:
					'style-book' === getEditorCanvasContainerView(),
				revisionsCount:
					globalStyles?._links?.[ 'version-history' ]?.[ 0 ]?.count ??
					0,
			};
		},
		[]
	);

	const openGlobalStyles = useCallback( async () => {
		return Promise.all( [
			setCanvasMode( 'edit' ),
			openGeneralSidebar( 'edit-site/global-styles' ),
		] );
	}, [ setCanvasMode, openGeneralSidebar ] );

	const openStyleBook = useCallback( async () => {
		await openGlobalStyles();
		// Open the Style Book once the canvas mode is set to edit,
		// and the global styles sidebar is open. This ensures that
		// the Style Book is not prematurely closed.
		setEditorCanvasContainerView( 'style-book' );
		setIsListViewOpened( false );
	}, [
		openGlobalStyles,
		setEditorCanvasContainerView,
		setIsListViewOpened,
	] );

	const openRevisions = useCallback( async () => {
		await openGlobalStyles();
		// Open the global styles revisions once the canvas mode is set to edit,
		// and the global styles sidebar is open. The global styles UI is responsible
		// for redirecting to the revisions screen once the editor canvas container
		// has been set to 'global-styles-revisions'.
		setEditorCanvasContainerView( 'global-styles-revisions' );
	}, [ openGlobalStyles, setEditorCanvasContainerView ] );

	// If there are no revisions, do not render a footer.
	const hasRevisions = revisionsCount > 0;
	const modifiedDateTime = revisions?.[ 0 ]?.modified;
	const shouldShowGlobalStylesFooter =
		hasRevisions && ! isLoadingRevisions && modifiedDateTime;

	return (
		<>
			<SidebarNavigationScreen
				title={ __( 'Styles' ) }
				description={ __(
					'Choose a different style combination for the theme styles.'
				) }
				content={ <SidebarNavigationScreenGlobalStylesContent /> }
				footer={
					shouldShowGlobalStylesFooter && (
						<SidebarNavigationScreenDetailsFooter
							record={ revisions?.[ 0 ] }
							onClick={ openRevisions }
						/>
					)
				}
				actions={
					<>
						{ ! isMobileViewport && (
							<SidebarButton
								icon={ seen }
								label={ __( 'Style Book' ) }
								onClick={ () =>
									setEditorCanvasContainerView(
										! isStyleBookOpened
											? 'style-book'
											: undefined
									)
								}
								isPressed={ isStyleBookOpened }
							/>
						) }
						<SidebarButton
							icon={ edit }
							label={ __( 'Edit styles' ) }
							onClick={ async () => await openGlobalStyles() }
						/>
					</>
				}
			/>
			{ isStyleBookOpened && ! isMobileViewport && isViewMode && (
				<StyleBook
					enableResizing={ false }
					isSelected={ () => false }
					onClick={ openStyleBook }
					onSelect={ openStyleBook }
					showCloseButton={ false }
					showTabs={ false }
				/>
			) }
		</>
	);
}
