import { redirect } from "next/navigation";

const categoryId = "01"
const HeroPage = async () => {
redirect(`/category/${categoryId}`)
};

export default HeroPage;