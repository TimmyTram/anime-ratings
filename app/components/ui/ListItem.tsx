interface ListItemProps {
    items: { name: string }[] | undefined;
    title: string;
  }
  
  const ListItem = ({ items, title }: ListItemProps) => {
    if (!items) return null;
  
    return (
      <div className="flex flex-col lg:flex-row gap-2">
        <h3 className="font-semibold">{title}:</h3>
        {items.map((item, idx) => (
          <p key={idx} className="font-semibold">
            {idx < items.length - 1 ? `${item.name},` : item.name}
          </p>
        ))}
      </div>
    );
  };
  
  export default ListItem;
  