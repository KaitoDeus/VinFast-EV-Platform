import { ThemeProvider, LanguageProvider } from "@/components/providers";

// Desktop Components
import {
  DesktopHeader,
  DesktopFooter,
  DesktopHeroSection,
  DesktopFeaturesSection,
  DesktopTechSpecsSection,
  DesktopColorSelectorSection,
  DesktopGallerySection,
  DesktopFaqSection,
  DesktopContactSection,
  DesktopBlogSection,
} from "@/components/desktop";

// Mobile Components
import {
  MobileHeader,
  MobileFooter,
  MobileHeroSection,
  MobileFeaturesSection,
  MobileTechSpecsSection,
  MobileColorSelectorSection,
  MobileGallerySection,
  MobileFaqSection,
  MobileContactSection,
  MobileBlogSection,
} from "@/components/mobile";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen theme-bg theme-text flex flex-col font-sans transition-colors duration-300 selection:bg-primary selection:text-white">
          {/* Desktop Viewport (≥ 1024px) */}
          <div className="hidden lg:flex flex-col min-h-screen">
            <DesktopHeader />
            <main className="flex-1">
              <DesktopHeroSection />
              <DesktopFeaturesSection />
              <DesktopTechSpecsSection />
              <DesktopColorSelectorSection />
              <DesktopGallerySection />
              <DesktopFaqSection />
              <DesktopContactSection />
              <DesktopBlogSection />
            </main>
            <DesktopFooter />
          </div>

          {/* Mobile Viewport (< 1024px) */}
          <div className="flex lg:hidden flex-col min-h-screen">
            <MobileHeader />
            <main className="flex-1">
              <MobileHeroSection />
              <MobileFeaturesSection />
              <MobileTechSpecsSection />
              <MobileColorSelectorSection />
              <MobileGallerySection />
              <MobileFaqSection />
              <MobileContactSection />
              <MobileBlogSection />
            </main>
            <MobileFooter />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
