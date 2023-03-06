import { cls } from "@/libs/utils";

interface LayoutPros {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}
export default function Layout({title, canGoBack, hasTabBar, children}: LayoutPros) {
  return (
    <div>
      <div className="bg-white w-full text-lg font-medium py-3 fixed text-gray-700 border-b top-0 flex items-center justify-center">
        {title ? <span>{title}</span> : null }
      </div>
      <div className={cls("pt-16", hasTabBar? "pb-16" : "")}>
        {children}
      </div>
      {hasTabBar ? <nav className="bg-white text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-between items-center">
        
      </nav> : null}
    </div>
  );
}