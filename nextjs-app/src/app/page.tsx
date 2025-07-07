import MainLayout from "@/components/layouts/MainLayout";
import InfoPage from "@/components/pages/InfoPage";
import ActivityPage from "@/components/pages/ActivityPage";
import ArticlePage from "@/components/pages/ArticlePage";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <InfoPage />
        <hr className="my-8 border-gray-200" />
        <ActivityPage />
        <hr className="my-8 border-gray-200" />
        <ArticlePage />
        <ScrollToTop />
      </div>
    </MainLayout>
  );
}
