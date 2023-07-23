import { MdDateRange } from "react-icons/md";

const EventCard = ({event}) => {
    return (
       
        <div>
            <div className='grid grid-cols-2 gap-3 border p-2 rounded-lg shadow-md'>
                <div className="flex justify-center items-center" >
                {event.image && (
              <img className="w-3/4 mx-auto rounded-lg" src={event.image} alt={event.name} />
            )}
                </div>
                <div>
                <h1 className='text-xl font-bold'>{event.name}</h1>
          <p className="flex items-center gap-3 my-2"> <MdDateRange></MdDateRange> {event.date}</p>
                    <hr />
          <p className="mt-3">{event.description}</p>
                </div>

            </div>
        </div>
    );
};

export default EventCard;