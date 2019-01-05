import React, { Children } from 'react';
import {
  InputLabel,
  FormControl,
  TextField,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  Input
} from '@material-ui/core';
import styled from 'styled-components';
const FormWrapper = styled(Paper)`
&& {
  margin: 10px;
  padding: 10px;
}
`
const Title = styled(Typography).attrs({
  component: 'h5',
})`
`
export default () => {
  const data = {
    companyname: '212',
  }

  return (
    <>
      <FormWrapper>
      <Title>
        填写订单
      </Title>
      <FormControl fullWidth>
      <TextField
        id="companyName"
        label="Name"
        value="什么公司"
        margin="normal"
        disabled
      />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="repairTitle"
          label="维修物品名称"
          type="search"
          margin="normal"
          fullWidth
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="houseSelect">房屋选择</InputLabel>
        <Select
          value={0}
          onChange={() => {}}
          input={<Input name="houseSelect" id="houseSelect" />}
        >
          <MenuItem value={0}>house1</MenuItem>
          <MenuItem value={1}>house2</MenuItem>
          <MenuItem value={2}>house3</MenuItem>
        </Select>
        <FormHelperText>从个人信息中登记的房屋中进行选择</FormHelperText>
      </FormControl>
      <FormControl fullWidth margin="normal">
      <TextField
        id="outlined-multiline-static"
        label="维修内容简介"
        multiline
        rows="4"
        placeholder="损坏情况、初步修理、维修物品数量等。。。"
        margin="normal"
        variant="outlined"
      />
      </FormControl>
      </FormWrapper>
    </>
  )
}