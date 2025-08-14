import FeedNavBar from "@/components/feed/FeedNavBar";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body>
        <FeedNavBar />
        {children}
      </body>
    </>
  );
}
