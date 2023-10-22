import { Container, Typography } from "@mui/material"
import React from "react"

export default React.memo(function HomePage() {
    return (
			<Container>
				<Typography variant="h3">Задание: </Typography>
				<Typography variant="body1">
					Создай стартовый конфиг для SPA-приложения (без использования CRA) на TypeScript. Настрой сборку и интегрируйте стейт-менеджер (любой на выбор).
				</Typography>
				<Typography variant="body1">
					Добавь 3 страницы в приложение:
				</Typography>
				<Typography variant="body1">
					1. На первой странице надо сделать простой счетчик, состояние которого хранится в сторе.<br />
					2. На второй странице реализуй отправку запроса при открытии страницы к любому тестовому бэкенду из доступных в интернете.(результат вывести на страницу) + отобразить лоадер пока грузятся данные.<br />
					3. На третьей странице добавь кнопку, при нажатии которой одновременно отправляются два(разных) запроса. Текст из полученных результатов должен отображаться на странице после получения ответа от бэкенда.<br />
				</Typography>
			</Container>
    )
})