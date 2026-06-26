import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const SelectorsPage = lazy(() => import('./pages/SelectorsPage'))
const DisplayPage = lazy(() => import('./pages/DisplayPage'))
const BoxModelPage = lazy(() => import('./pages/BoxModelPage'))
const TypographyPage = lazy(() => import('./pages/TypographyPage'))
const CssUnitsPage = lazy(() => import('./pages/CssUnitsPage'))
const LinksPage = lazy(() => import('./pages/LinksPage'))
const ListsPage = lazy(() => import('./pages/ListsPage'))
const CardPage = lazy(() => import('./pages/CardPage'))
const FlexboxPage = lazy(() => import('./pages/FlexboxPage'))
const FlexboxProjectPage = lazy(() => import('./pages/FlexboxProjectPage'))
const MediaQueriesPage = lazy(() => import('./pages/MediaQueriesPage'))
const VariablesPage = lazy(() => import('./pages/VariablesPage'))
const NestingPage = lazy(() => import('./pages/NestingPage'))
const GridPage = lazy(() => import('./pages/GridPage'))
const PositioningPage = lazy(() => import('./pages/PositioningPage'))
const TransitionsPage = lazy(() => import('./pages/TransitionsPage'))
const TransformsPage = lazy(() => import('./pages/TransformsPage'))
const PseudoElementsPage = lazy(() => import('./pages/PseudoElementsPage'))
const BackgroundsPage = lazy(() => import('./pages/BackgroundsPage'))
const ShadowsPage = lazy(() => import('./pages/ShadowsPage'))
const OverflowPage = lazy(() => import('./pages/OverflowPage'))
const CssFunctionsPage = lazy(() => import('./pages/CssFunctionsPage'))
const AspectRatioPage = lazy(() => import('./pages/AspectRatioPage'))
const ObjectFitPage = lazy(() => import('./pages/ObjectFitPage'))
const CascadeLayersPage = lazy(() => import('./pages/CascadeLayersPage'))

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main className="app-content">
        <Suspense fallback={<div className="loading">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/selectors" element={<SelectorsPage />} />
            <Route path="/display" element={<DisplayPage />} />
            <Route path="/box-model" element={<BoxModelPage />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/css-units" element={<CssUnitsPage />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/lists" element={<ListsPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/flexbox" element={<FlexboxPage />} />
            <Route path="/flexbox-project" element={<FlexboxProjectPage />} />
            <Route path="/media-queries" element={<MediaQueriesPage />} />
            <Route path="/variables" element={<VariablesPage />} />
            <Route path="/nesting" element={<NestingPage />} />
            <Route path="/grid" element={<GridPage />} />
            <Route path="/positioning" element={<PositioningPage />} />
            <Route path="/transitions" element={<TransitionsPage />} />
            <Route path="/transforms" element={<TransformsPage />} />
            <Route path="/pseudo-elements" element={<PseudoElementsPage />} />
            <Route path="/backgrounds" element={<BackgroundsPage />} />
            <Route path="/shadows" element={<ShadowsPage />} />
            <Route path="/overflow" element={<OverflowPage />} />
            <Route path="/css-functions" element={<CssFunctionsPage />} />
            <Route path="/aspect-ratio" element={<AspectRatioPage />} />
            <Route path="/object-fit" element={<ObjectFitPage />} />
            <Route path="/cascade-layers" element={<CascadeLayersPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
