import React from "react";
import { AppLayout } from "./components/layouts/AppLayout";
import { News } from "./modules/news/News";

export const App = () => {
  return (
    <AppLayout>
      <News />
    </AppLayout>
  );
};

export default App;
