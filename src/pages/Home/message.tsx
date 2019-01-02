import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core'

const TypographyS = styled.div`
  margin-left: 15px;
  opacity: 0.7;
`
const ExpansionPanelDetailsS = styled(ExpansionPanelDetails)`
  && {
    width: 100%;
    padding: 0 4px 24px 4px;
  }
`
const ExpansionPanelS = styled(ExpansionPanel)`
  && {
    width: 100%;
    margin: 0 0px 0px 0px;
  }
`

export default () => {
  const [expanded, setExpanded] = useState<string | boolean>('panel0')
  const handleChange = (panel: string) => {
    setExpanded(expanded !== panel ? panel : false)
  }
  return (
    <>
      <ExpansionPanelS expanded={expanded === 'panel0'} onChange={() => handleChange('panel0')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Feb 12, 2019</Typography>
          <TypographyS>Roof needs remodeling!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
      <ExpansionPanelS expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Feb 19, 2019</Typography>
          <TypographyS>Handyman Service Coming!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
    </>
  )
}
