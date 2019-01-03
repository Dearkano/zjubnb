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
const TypographyS1 = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`
const TypographyS2 = styled.div`
    color: #783750;
    padding-top: 3px;
    font-size: 0.7rem;
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
    background-color: #F9F7F3;
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
          <TypographyS2>Feb 12, 2019</TypographyS2>
          <TypographyS>Roof needs remodeling!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <TypographyS1>
            Your house's roof needs to be repaired! Last repair is 10 years ago!
          </TypographyS1>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
      <ExpansionPanelS expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TypographyS2>Feb 19, 2019</TypographyS2>
          <TypographyS>Handyman Service Coming!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <TypographyS1>
            The handyman service will come in your previous order, click <a>hear</a> to see the
            detail.
          </TypographyS1>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
      <ExpansionPanelS expanded={expanded === 'panel2'} onChange={() => handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TypographyS2>Mar 1, 2019</TypographyS2>
          <TypographyS>Time to pay off the loan!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <TypographyS1>$399 for the city bank loan, 49 months left.</TypographyS1>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
      <ExpansionPanelS expanded={expanded === 'panel3'} onChange={() => handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TypographyS2>Apr 1, 2019</TypographyS2>
          <TypographyS>Time to pay off the loan!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <TypographyS1>$399 for the city bank loan, 48 months left.</TypographyS1>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
      <ExpansionPanelS expanded={expanded === 'panel4'} onChange={() => handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TypographyS2>May 1, 2019</TypographyS2>
          <TypographyS>Time to pay off the loan!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <TypographyS1>$399 for the city bank loan, 47 months left.</TypographyS1>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
      <ExpansionPanelS expanded={expanded === 'panel3'} onChange={() => handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TypographyS2>June 1, 2019</TypographyS2>
          <TypographyS>Time to pay off the loan!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <TypographyS1>$399 for the city bank loan, 46 months left.</TypographyS1>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
      <ExpansionPanelS expanded={expanded === 'panel3'} onChange={() => handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TypographyS2>July 1, 2019</TypographyS2>
          <TypographyS>Time to pay off the loan!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <TypographyS1>$399 for the city bank loan, 45 months left.</TypographyS1>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
      <ExpansionPanelS expanded={expanded === 'panel3'} onChange={() => handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TypographyS2>Aug 1, 2019</TypographyS2>
          <TypographyS>Time to pay off the loan!</TypographyS>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsS>
          <TypographyS1>$399 for the city bank loan, 44 months left.</TypographyS1>
        </ExpansionPanelDetailsS>
      </ExpansionPanelS>
    </>
  )
}
