import Card from "./Card"

export default function LandingPage() {

    return (
        <div>
            {/* show cards with */}
            <Card
                title={"I need help with derivatives in calculus"}
                topic={"Test"}
                time={"5 hours"}
                type={"Math"}
                deadline={"11/25/2022"}
                />
        </div>
    )
}