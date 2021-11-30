import Illustration from "./subcomponent/Illustration";
import Description from "./subcomponent/Description";
import './style.css';

const Introduction = () => {
  return (
    <div className='introduction'>
      <Illustration />
      <Description />
    </div>
  );
};

export default Introduction;
