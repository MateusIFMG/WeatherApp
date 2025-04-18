import type { GetWeatherForecastResponse } from "@/api/get-weather-forecast"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"
import { WeatherIcon } from "@/icons"
import {} from "tailwindcss"

export function Days({ list }: GetWeatherForecastResponse) {
	return (
		<Card className="md:col-span-4">
			<CardHeader>
				<CardTitle>Próximos dias</CardTitle>
			</CardHeader>
			<CardContent className="max-w-full overflow-x-hidden">
				<div className="flex gap-2 flex-col ">
					{list?.map((dia) => (
						<div key={dia.dt_txt} className="w-full flex items-center justify-between gap-4 ">
							<span className="min-w-[70px]">
								{Intl.DateTimeFormat("pt-BR", { weekday: "long" })
									.format(new Date(dia.dt_txt))
									.replace("-feira", "")
									.replace(/^\w/, (c) => c.toUpperCase())}
							</span>
							<WeatherIcon iconCode={dia.weather[0].icon} size="20" />
							<div className="flex items-center justify-end gap-2 md:min-w-3xs">
								<span>{dia.main.temp_min.toFixed(2)}°C</span>
								<Progress
									value={(dia.main.temp_min + dia.main.temp_max) / 2}
									className="w-18 h-1 hidden sm:block"
								/>
								<span className="sm:hidden block"> - </span>
								<span>{dia.main.temp_max.toFixed(2)}°C</span>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
