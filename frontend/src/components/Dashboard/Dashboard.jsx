// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListTopUser from '../List/ListTopUser';
import ListTopProduct from '../List/ListTopProduct';
import CardContext from '../Card/CardContext';
const Dashboard= () =>{
    return(
        <>
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">
                        <CardContext 
                            title='ORDERS'
                            statistics={1444}
                            percent
                            time
                        />
                        <CardContext 
                            title='PRODUCTS'
                            statistics={1444}
                            percent
                            time
                        />
                        <CardContext 
                            title='USERS'
                            statistics={144}
                            percent
                            time
                        />
                        <CardContext 
                            title='PAYMENTS'
                            statistics={1444}
                            percent
                            time
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 mb-4">
                    </div>
                    <div className="grid xl:grid-cols-2 gap-4 mb-4">
                        <div className="border-solid border-2 shadow-sm border-gray-200 h-auto items-center justify-center rounded bg-gray-100 dark:bg-gray-800">
                            <ListTopProduct/>
                        </div>
                        <div className="border-solid border-2 shadow-sm border-gray-200 h-auto items-center justify-center rounded bg-gray-100 dark:bg-gray-800">                           
                            <ListTopUser/>
                        </div>                        
                    </div>                    
        </>
    );
}
export default Dashboard;