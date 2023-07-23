import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';



const useAdmission = () => {


    const { user } = useContext(AuthContext);
    //   const token = localStorage.getItem('access-token');

   
      const { refetch, data: admission = [] } = useQuery({
        queryKey: ['admission', user?.email],
        
             queryFn: async () => {
            const res =  (`/admission?email=${user?.email}`)
           
            return res.data;
        },
    })

    return [admission, refetch]
}

export default useAdmission;