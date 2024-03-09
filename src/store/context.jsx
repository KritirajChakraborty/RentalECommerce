import { useState, createContext } from "react";

export const MobileMenuContext = createContext({
  mobIsOpen: false,
  toggleMenu: () => {},
});

export default function MobileMenuContextProvider({ children }) {
  const [mobIsOpen, setMobIsOpen] = useState(false);

  function toggleMenu() {
    setMobIsOpen((prevState) => !prevState);
  }
  function closeMobMenu() {
    setMobIsOpen(false);
  }
  const ctxValue = {
    state: mobIsOpen,
    toggleBtn: toggleMenu,
    close: closeMobMenu,
  };

  return (
    <MobileMenuContext.Provider value={ctxValue}>
      {children}
    </MobileMenuContext.Provider>
  );
}
