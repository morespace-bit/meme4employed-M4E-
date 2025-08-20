import FeedNavBar from "@/components/feed/FeedNavBar";
import { ViewProvider } from "@/lib/ViewContext";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <ViewProvider>
          <FeedNavBar />
          {children}
        </ViewProvider>
      </div>
    </>
  );
}
