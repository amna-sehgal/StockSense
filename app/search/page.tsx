import SearchBar from '@/app/components/StockSearchPage/search';
import CursorGlow from '@/app/components/StockSearchPage/cursorGlow';
import NavBar from '../components/Navbar/navbar';

export default function SearchPage() {
    return (
        <div>
            <CursorGlow />
            <NavBar />
            <SearchBar />
        </div>
    );
}
