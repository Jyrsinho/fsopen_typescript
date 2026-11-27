import type {CoursePart} from "./types.ts";

interface ContentProps {
    courseParts: CoursePart[];
}

export function Content(props: ContentProps) {
    const courseParts = props.courseParts;
    return (
        <div>
            {courseParts.map((coursePart: CoursePart) => {
                    return <p key={coursePart.name}>
                        {coursePart.name} {coursePart.exerciseCount}
                    </p>
                }
            )}
        </div>
    )
}