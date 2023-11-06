// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardOne from '../Card/CardOne';
import CardTwo from '../Card/CardTwo';
import CardThree from '../Card/CardThree';
import CardFour from '../Card/CardFour';
import ColumnChart from '../chart/ColumnChart';
import LineChart from '../chart/LineChart';
import TopUser from '../Table/TopUser';
const DashboardContent = () =>{
    return(
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 rounded-lg mt-14">
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">
                        <CardOne/>
                        <CardTwo/>
                        <CardThree/>
                        <CardFour/>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 mb-4">
                        <ColumnChart />
                        <LineChart />
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="flex col-span-2 items-center justify-center rounded bg-gray-100 dark:bg-gray-800">
                            
                        </div>
                        <div className="col-span-1 h-auto items-center justify-center rounded bg-gray-100 dark:bg-gray-800">                           
                            <TopUser/>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </>
    );
}
export default DashboardContent;