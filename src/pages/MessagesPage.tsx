import React, { useState } from "react"
import { Button, Grid, Typography } from "@mui/material";
import { getOneMessageApi } from "api/two-messages/api";
import { useMutation, useQueries, useQuery } from "react-query";
import { BarLoader } from "react-spinners";

export default function MessagesPage() {
    // Можно сделать используя Rx для объединения двух результатов 
    // Можно использовать Promise.all() для более низкоуровнего подхода
    const [resultText, setResultText] = useState("");

    const {mutateAsync: fetchFirstMessage, error: errorFirst, isLoading: isLoadingFirst} = useMutation(() => getOneMessageApi(1));
    const {mutateAsync: fetchSecondaryMessage, error: errorSecond, isLoading: isLoadingSecond} = useMutation(() => getOneMessageApi(2));

    const handleTwoRequests = React.useCallback(() => {
    Promise.allSettled([
        fetchFirstMessage(), 
        fetchSecondaryMessage()
    ]).then((response) => {
    const [r1, r2] = response as any;
        setResultText(`Текст от запроса №1: ${r1.value.message}; Текст от запроса №2: ${r2.value.message} - в одном результате`)
    }).catch((error) => {
      // обработка ошибки, если
    }).finally(() => {
      // 
    });
    }, []);

    if (errorFirst || errorSecond) {
      <Typography variant="h2" color="darkorange">{(errorFirst || errorSecond) as any}</Typography>
    }

    if (isLoadingFirst || isLoadingSecond) return (
      <BarLoader />
    )

    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center" direction={"column"}>
        <Grid item>
          <Button onClick={handleTwoRequests}>
            Сделать два разных запроса!
          </Button>
        </Grid>
        {resultText && (
          <Grid item>
            <Typography>Результат в одной переменной:</Typography>
            <Typography variant="body2">{resultText}</Typography>
          </Grid>
        )}
      </Grid>
    )
}