import React, { Children, useState } from 'react';
import {
  InputLabel,
  Fab,
  FormControl,
  TextField,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  Input
} from '@material-ui/core';
import userInstance from '@/containers/user'
import useContainer from '@/hooks/useContainer'
import NavigationIcon from '@material-ui/icons/Navigation';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import companyInstance from '@/containers/company';
import { postOrder } from '@/services/order';
import types from '@/resources/services';
import { Link, navigate } from '@reach/router';
import { buy } from '@/utils/wallet';
interface RepairItem {
  key: number;
  types: string;
  discript: string;
}
type RepairItemList = RepairItem[];
const FormWrapper = styled(Paper)`
&& {
  margin: 10px;
  padding: 10px;
}
`
const FixFab = styled(Fab)`
  && {
  position: fixed;
  z-index: 20;
  width: 200px;
  bottom: 15px;
  right: 15px;
  }
`
const DeleteButton = styled(IconButton).attrs({
  'aria-label': 'Delete',
})`
  && {
    position: absolute;
    right: 5px;
    bottom: 5px;
  }
`
const GobackIcon = styled(IconButton)`
&& {
  margin-left: 0px;
  margin-right: 5px;
}
`
const RepairItem = styled(Paper)`
  && {
    padding: 5px 50px 5px 20px;
    position: relative;
    margin-bottom: 15px;
  }
`
const Title = styled(Typography).attrs({
  component: 'h5',
})`
`

const RepairItemForm = ({ data, kit }) => (
  <RepairItem>
  <FormControl fullWidth margin="normal">
    <InputLabel htmlFor="houseSelect">Repair item select</InputLabel>
    <Select
      value={data.types}
      onChange={e => { kit.set(data.key, { types: e.target.value }) }}
      input={<Input name="houseSelect" id="houseSelect" />}
    >
      {types.map(e => (
        <MenuItem value={e.id}>{e.name}</MenuItem>
      ))}
    </Select>
    <FormHelperText>Select House</FormHelperText>
  </FormControl>
  <FormControl fullWidth margin="normal">
  <TextField
    id="outlined-multiline-static"
    label="Description"
    multiline
    value={data.discript}
    onChange={e => { kit.set(data.key, { discript: e.target.value }) }}
    rows="4"
    placeholder="condition, amounts of items...."
    margin="normal"
    variant="outlined"
  />
  </FormControl>
  <Tooltip title="Delete">
    <DeleteButton onClick={() => { kit.del(data.key) }}>
      <DeleteIcon />
    </DeleteButton>
  </Tooltip>
  </RepairItem>
  )

export default () => {
  const data = {
    companyname: '212',
  }
  const [houseField, setHouseField] = useState(0);
  const [repairItemField, setRepairItemField] = useState<RepairItemList>([]);
  const { state: { data: company } } = useContainer(companyInstance)
  const { state: user } = useContainer(userInstance)
  const companyId = company.company_id;
  const handleRepairItemField = {
    set: (key, obj) => {
      const a = repairItemField.map(e => {
        if (e.key === key) {
          return { ...e, ...obj };
        }

        return e;
      })
      setRepairItemField(a);
    },
    del: (key) => {
      const a = repairItemField.filter(e => e.key !== key)
      setRepairItemField(a);
    },
  }
  const handleSelect = (e) => {
    setHouseField(e.target.value);
  }
  if (!user.myInfo) return <></>;

  return (
    <>
      <GobackIcon onClick={() => { window.history.back() }}>
        <KeyboardBackspaceIcon />
      </GobackIcon>
      <FormWrapper>
      <Title>
        Complete Form
      </Title>
      <FormControl fullWidth>
      <TextField
        id="companyName"
        label="Company Name"
        value={company.company_name}
        margin="normal"
        disabled
      />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="houseSelect">Select House</InputLabel>
        <Select
          value={houseField}
          onChange={handleSelect}
          input={<Input name="houseSelect" id="houseSelect" />}
        >
          {user.myInfo.own_house.map(e => (
            <MenuItem value={e.house_id}>{e.address}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Select the house</FormHelperText>
      </FormControl>
      <FormControl fullWidth>
      {repairItemField.map(e => (
      <RepairItemForm
        key={e.key}
        data={e}
        kit={handleRepairItemField}
      />))}
      <Tooltip title="Add" aria-label="Add">
        <Fab
          color="primary"
          style={{ margin: 'auto', 'margin-top': '5px' }}
          onClick={() => {
            const timestamp = new Date().getTime();
            const p = repairItemField;
            p.push({
              key: timestamp,
              types: '1',
              discript:'',
            });
            setRepairItemField(p);
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      </FormControl>
      <FormControl fullWidth>
      <TextField
        id="companyName"
        label="Fee"
        value={500}
        margin="normal"
        disabled
      />
      </FormControl>
      </FormWrapper>

      <FixFab
        variant="extended"
        aria-label="snd"
        onClick={async() => {
          console.log(user.myInfo)
          const data = {
            clientId: user.myInfo.clent_id,
            companyId: company.company_id,
            houseId: houseField,
            itemList: repairItemField.map(e => ({ serviceId: Number(e.types), detail: e.discript })),
          }
          console.log(data);
          const res = await postOrder(data); 
          res.fail()
            .succeed(e => {
              console.log(e);
              buy(100);
              navigate('order');
            })

        }}
      >
        <NavigationIcon />
        Submit
      </FixFab>
    </>
  )
}

