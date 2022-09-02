import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('components/pages/HomePage/HomePage'));
const SearchMoviesPage = lazy(() =>
  import('components/pages/MoviesPage/SearchMoviesPage')
);
const NotFoundPage = lazy(() =>
  import('components/pages/NotFoundPage/NotFoundPage')
);
const SingleMoviePage = lazy(() =>
  import('components/pages/MoviesPage/SingleMoviePage')
);
const CastPage = lazy(() => import('components/pages/CastPage/CastPage'));
const ReviewsPage = lazy(() =>
  import('components/pages/ReviewsPage/ReviewsPage')
);
export const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...load Page</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<SearchMoviesPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
