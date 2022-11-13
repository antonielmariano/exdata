import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import { SectionStyled } from './styles';
import { useHistory } from 'react-router-dom';

export default function ProgressBar (){

  const [progress, setProgress] = React.useState(0);
  const history = useHistory()

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    setTimeout(() => history.push("/filtrar"), 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionStyled>
        <Progress.Root className="ProgressRoot" value={0}>
        <Progress.Indicator
            className="ProgressIndicator"
            style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    </SectionStyled>
  );
};