/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Button from "./components/Button";
import ImageAlt from "./components/ImageAlt";
import DuplicateAriaId from "./components/DuplicateAriaIdInForm";
import LinksWithoutDiscernibleText from "./components/LinksWithoutDiscernibleText";
import TableWithoutCaption from "./components/TableWithoutCaption";
import DialogWithoutAccessibleName from "./components/DialogWithoutAccessibleName";
import MissingRoleText from "./components/MissingRoleText";
import TreeItemWithoutName from "./components/TreeItemWithoutAriaName";
import IframeWithoutTestingScript from "./components/IframeWithoutTestingScript";
import TabIndexError from "./components/TabIndexError";

export default async function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <nav>
        <ul className="flex justify-center gap-4">
          <li className="text-2xl font-bold text-black hover:underline">
            <Link href="/insert">Insert javascript url</Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button />
        <ImageAlt />
        <DuplicateAriaId />
        <LinksWithoutDiscernibleText />
        <TableWithoutCaption />
        <DialogWithoutAccessibleName />
        <MissingRoleText />
        <TreeItemWithoutName />
        <IframeWithoutTestingScript />
        <TabIndexError />
      </main>
    </div>
  );
}
