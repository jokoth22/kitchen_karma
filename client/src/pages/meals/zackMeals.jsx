import {
    Theme,
    Flex,
    Text,
    TextField,
    Dialog,
    Button,
    Table
  } from "@radix-ui/themes";
  import "@radix-ui/themes/styles.css";
  import Header from "../../components/header/header";
  import Footer from "../../components/footer/footer";
  import "../meals/style.css";

  import { useState } from 'react';
  import { useMutation } from '@apollo/client';
  import { ADD_DAY } from "../../utils/mutations";
  
  const Meals = () => {

    const [formData, setFormData] = useState({
      carbGoal: '',
      proteinGoal: '',
      fatsGoal: '',
      calorieGoal: '',
    });

    const [addDay, {error}] = useMutation(ADD_DAY);

    const handleInputChange = (event) => {
      const { name, value } = event.target;

      const integerValue = parseInt(value, 10);

      setFormData({
        ...formData,
        [name]: isNaN(integerValue) ? '' : integerValue,
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log('Form Submitted');
      try {

        const parsedFormData = {
          ...formData,
          carbGoal: parseInt(formData.carbGoal, 10),
          proteinGoal: parseInt(formData.proteinGoal, 10),
          fatsGoal: parseInt(formData.fatsGoal, 10),
          calorieGoal: parseInt(formData.calorieGoal, 10),
        };

        const { data } = await addDay({
          variables: { dayData: parsedFormData },
        });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Theme>
        <Header />
        <h1>Meals</h1>
        <Flex direction="column" gap="3" style={{ maxWidth: 100 }}></Flex>
        <TextField.Input placeholder="Search saved meals" size="2" radius="medium" />
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>Add Day</Button>
          </Dialog.Trigger>
  
          <Dialog.Content style={{ maxWidth: 450 }}>
            <form onSubmit={handleFormSubmit}>
            <Dialog.Title>Add Day</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Add a meal to track
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Carb Goal
                </Text>
                <TextField.Input
                  name="carbGoal"
                  value={formData.carbGoal}
                  onChange={handleInputChange}
                  placeholder="Enter your Carb Goal"
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Protein Goal
                </Text>
                <TextField.Input
                  name="proteinGoal"
                  value={formData.proteinGoal}
                  onChange={handleInputChange}
                  placeholder="Enter your Protein Goal"
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Fats Goal
                </Text>
                <TextField.Input
                  name="fatsGoal"
                  value={formData.fatsGoal}
                  onChange={handleInputChange}
                  placeholder="Enter your Fats Goal"
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Calorie Goal
                </Text>
                <TextField.Input
                  name="calorieGoal"
                  value={formData.calorieGoal}
                  onChange={handleInputChange}
                  placeholder="Enter your Calorie Goal"
                />
              </label>
            </Flex>
  
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
                <Button type="submit">Save</Button>
            </Flex>
            </form>
          </Dialog.Content>
        </Dialog.Root>
  
        {/* current meals */}
        {/* add day / delete */}
  
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Day</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Meal</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Macro Info</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>Wednesday 2/14/24</Table.RowHeaderCell>
              <Table.Cell>Yogurt</Table.Cell>
              <Table.Cell>Protein?</Table.Cell>
            </Table.Row>
  
            <Table.Row>
              <Table.RowHeaderCell>Thursday 2/15/24</Table.RowHeaderCell>
              <Table.Cell>Rock Soup</Table.Cell>
              <Table.Cell>Cronchy</Table.Cell>
            </Table.Row>
  
            <Table.Row>
              <Table.RowHeaderCell>Thursday 2/15/24</Table.RowHeaderCell>
              <Table.Cell>Oxygen</Table.Cell>
              <Table.Cell>Free</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
  
        <Footer />
      </Theme>
    );
  };
  
  export default Meals;