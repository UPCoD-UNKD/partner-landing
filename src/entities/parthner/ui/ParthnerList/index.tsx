import { Parthner } from '../Parthner';
import { Description } from './Description';
import { Inner } from './Inner';
import { Wrapper } from './Wrapper';

interface ParthnersProps {
  parthners: string[]
}

export default function ParthnerList(props: ParthnersProps) {
  const { parthners } = props

  return (
    <Wrapper>
      <Inner>
        {parthners.map(p => {
          return (
            <Parthner>
              {p}
            </Parthner>
          )
        })}
      </Inner>
      <Description>
        Співпраця з торговими майданчиками
      </Description>
    </Wrapper>
  )
}
