# Wire Frame

![Wire frame](./assets/Screenshot%202022-11-30%20at%202.37.27%20PM.png)
!(./assets/table1.png)
!(./assets/table2.png)
!(./assets/rls.png)

# Plan

1. Database Setup in supabase
    - create 2 tables, `/workshops` and `/participants`
      workshops table
      name - varchar
      participants table
      name - varchar
      contact_info - varchar
      workshop_id - foreign key (workshops)
2. (landing page) Workshops page
    - getWorkshops function (fetch all of the workshops AND their members)
    - render function that displays the workshops
    - loop through workshops and display
3. Create page
    - HTML -> form elements with inputs for name, contact, placeholder `<select>` for workshops
    - get our workshops (`getWorkshops`) and dynamically add `<option>` to select
    - Add createMember function to fetch-utils
    - add event for the form submit, grabbing the form data and sending it to supabase (calling createParticipant)
4. Delete Participant (on workshops page)
    - add deleteParticipant(id) in fetch-utils
    - make participant element clickable & delete on click
