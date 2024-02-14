import { Button } from "@adobe/react-spectrum";

export default function ButtonPage() {
    return (
        <div>
            <h1>Button Page</h1>
            <Button
                variant="accent"
                onPress={() => alert('Hey there!')}
            >
                Hello React Spectrum!
            </Button>
        </div>
    );
}