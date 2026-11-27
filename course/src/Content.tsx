import type {CoursePart} from "./types.ts";
import {Part} from "./Part.tsx";

interface ContentProps {
    courseParts: CoursePart[];
}

export function Content(props: ContentProps) {
    const courseParts = props.courseParts;
    return (
        <div>
            {courseParts.map((coursePart: CoursePart) => {
                    return <Part key={coursePart.name} coursePart={coursePart}/>
                }
            )}
        </div>
    )
}