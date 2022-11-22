import * as Progress from '@radix-ui/react-progress';
import { SectionStyled } from './styles';

interface IProps{
  progress: number
}


export default function ProgressBar ({progress}:IProps){

  return (
    <SectionStyled>
        <Progress.Root className="ProgressRoot" value={10}>
        <Progress.Indicator
            className="ProgressIndicator"
            style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
        <h4>Estamos salvando os dados da planilha</h4>
    </SectionStyled>
  );
};