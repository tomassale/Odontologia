export default function UnorderedList({item}: Readonly<{item: string[]}>) {
  return (
    <ul>
      {item.map((listItem, index) => (
        <li key={index}>{listItem}</li>
      ))}
    </ul>
  )
}