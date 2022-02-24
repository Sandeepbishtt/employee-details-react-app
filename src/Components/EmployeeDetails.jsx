import React from 'react'
import {Dialog,DialogContent,DialogTitle,Typography } from '@mui/material'

const Detail = (props) =>{
	const {title,open,setOpen,data} = props
	return(
<Dialog
maxWidth ="sm"
open={open}
onClose={()=>setOpen(false)}
aria-labelledby="confirm-dialog">
<DialogTitle id="confirm-dialog"> {title} </DialogTitle>
<DialogContent>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ID: {data.id}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Name: {data.login}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Avatar: <img src={data.avatar_url} alt='pic' width="150px"/>
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              URL: {data.url}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Node ID: {data.node_id}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Type: {data.type}
            </Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Site Admin: {data.site_admin ? 'True' :'False'}
            </Typography>

</DialogContent>
</Dialog>


		)
}
export default Detail