import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { getProfilesApi } from "api/profiles/api"
import React from "react";
import { useQuery } from "react-query"
import { BarLoader } from "react-spinners"

export default function ProfilesPage() {    
    const {data, isLoading, error} = useQuery('profiles', getProfilesApi); 

    if (error) {
      <Typography variant="h2" color="darkorange">{error as any}</Typography>
    }

    if (isLoading) return (
      <BarLoader />
    )

    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {data && data.map((item) => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.photo} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.name}
                    </Typography>
                    {item.desc}
                  </React.Fragment>
                }
              />
          </ListItem>
        ))}

        <Divider variant="inset" component="li" />
      </List>
    )
}