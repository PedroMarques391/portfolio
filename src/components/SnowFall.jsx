import Snowfall from 'react-snowfall';

function SnowFall() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <Snowfall snowflakeCount={200} />
    </div>
  );
}

export default SnowFall;
