import React, { useRef } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LayoutCenter from '@/components/LayoutCenter'
import { IconButton, Button } from '@material-ui/core'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Div1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export default () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  function clickHandler() {
    if (!fileInputRef.current) {
      return
    }

    fileInputRef.current.click()
  }

  async function choosePicFinish(files: FileList | null) {
    // if (!files || files.length === 0) return
    // for (const file of files) {
    //   const res = await uploadPicture(file)
    //   res.fail().succeed(data => {
    //     editor.attachAttachment(`[img]${data[0]}[/img]`)
    //   })
    // }
  }
  return (
    <LayoutCenter>
      <Div>
        <InputText label="Username" />
        <InputText label="Password" />
        <InputText label="Phone" />
        <InputText label="Driver Licence ID" />
        <InputText label="Password" />
        <Div1>
          Upload your Licence
          <IconButton>
            <input
              style={{ display: 'none' }}
              type="file"
              name="file"
              onChange={e => choosePicFinish(e.target.files)}
              ref={fileInputRef}
              multiple
              accept="image/*"
            />
            <AddPhotoAlternateIcon onClick={clickHandler} />
          </IconButton>
        </Div1>
        <Button variant="contained" color="secondary">Submit</Button>
      </Div>
    </LayoutCenter>
  )
}

const InputText = (props: any) => (
  <Grid container spacing={8} alignItems="flex-end" justify="center">
    <Grid item>
      <AccountCircle />
    </Grid>
    <Grid item>
      <TextField id="input-with-icon-grid" label={props.label} />
    </Grid>
  </Grid>
)
