export const initAnalytics = () => {
  // @ts-ignore
  window.va =
    // @ts-ignore
    window.va ||
    function () {
      // @ts-ignore
      (window.vaq = window.vaq || []).push(arguments);
    };
};
