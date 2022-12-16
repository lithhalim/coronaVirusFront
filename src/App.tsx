import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { QueryClient,QueryClientProvider} from '@tanstack/react-query';
import HomePages from "./pages/HomePage/HomePages";
import PageNotFound from "./pages/page-not-found/Page_Not_Found";
import ChartAllCountry from "./pages/AllcoutriesPage/AllCountryData";
import HeaderSection from "./combonants/headerSection/headerSection";
import MyFavorateItem from "./pages/MyFavorateItem/MyFavorateItem";


const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
          <BrowserRouter>
                <Routes>
                  <Route path="/" element={<> <HeaderSection/> <HomePages/></>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                    <Route path="/allcountries" element={<><HeaderSection/> <ChartAllCountry/></>}/>
                  <Route path="/myRecords" element={<><HeaderSection/> <MyFavorateItem/></>}/>
                </Routes>
          </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
