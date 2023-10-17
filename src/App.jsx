// components
import {useGlobalContext} from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';


function App() {
    const {loading} = useGlobalContext();
    if (loading){
        return <main>
                <div className='loading'>

                </div>
            </main>
    }
    return(
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

