import Layout from 'components/Layout/Layout';
import React from 'react'
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import('pages/HomePage'));
const CounterPage = React.lazy(() => import('pages/CounterPage'));
const ProfilesPage = React.lazy(() => import('pages/ProfilesPage'));
const MessagesPage = React.lazy(() => import('pages/MessagesPage'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));

const Loading = () => <>Прогрузка страницы...</>

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route
					path="/counter"
					element={
						<React.Suspense fallback={<Loading />}>
							<CounterPage />
						</React.Suspense>
					}
				/>
				<Route
					path="/profiles"
					element={
						<React.Suspense fallback={<Loading />}>
							<ProfilesPage />
						</React.Suspense>
					}
				/>
				<Route
					path="/two-messages"
					element={
						<React.Suspense fallback={<Loading />}>
							<MessagesPage />
						</React.Suspense>
					}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}