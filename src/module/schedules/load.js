import { api } from "../../service/apiConfig";
import { updateDateView } from "./updateDateView";

const data = await fetch(`${api()}/schedules`)
const resp = await data.json()

updateDateView()




