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
  
  const Meals = () => {
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
            <Dialog.Title>Add Day</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Add a meal to track
            </Dialog.Description>
  
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Day
                </Text>
                <TextField.Input
                  defaultValue="Tuesday 2/13/24"
                  placeholder="Enter day you are meal planning"
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Meal
                </Text>
                <TextField.Input
                  defaultValue="Quinoa"
                  placeholder="Enter meal you are planning"
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Macro Info
                </Text>
                <TextField.Input
                  defaultValue="Good Protein"
                  placeholder="Enter meal macros"
                />
              </label>
            </Flex>
  
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>Save</Button>
              </Dialog.Close>
            </Flex>
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