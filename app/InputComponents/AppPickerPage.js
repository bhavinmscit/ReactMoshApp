import React, { useState } from "react";

import AppPicker from "../componant/AppPicker";
import AppTextInput from "../componant/AppTextInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

function AppPickerPage(props) {
  const [category, setCategory] = useState(categories[0]);
  return (
    <>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      ></AppPicker>
      <AppTextInput icon="email" placeholder="Email" />
    </>
  );
}

export default AppPickerPage;
