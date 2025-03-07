'use client';
import {
	QueryClient as QClient,
	QueryClientProvider as QClientProvider,
} from '@tanstack/react-query';
export const QueryClient = new QClient();
export default function QueryClientProvider({
	client,
	children,
}: {
	client: QClient;
	children: React.ReactNode;
}) {
	return <QClientProvider client={client}>{children}</QClientProvider>;
}
