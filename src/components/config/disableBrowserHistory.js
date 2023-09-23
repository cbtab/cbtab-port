import { useEffect } from "react";

const DisableBrowserHistoryNavigation = () => {
  useEffect(() => {
    const disableNavigation = () => {
      // Disable browser history navigation (back and forward buttons)
      window.history.pushState(null, null, window.location.href);
    };

    // Listen for the popstate event and prevent default behavior
    window.addEventListener("popstate", disableNavigation);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("popstate", disableNavigation);
    };
  }, []);

  return null;
};

export default DisableBrowserHistoryNavigation;
