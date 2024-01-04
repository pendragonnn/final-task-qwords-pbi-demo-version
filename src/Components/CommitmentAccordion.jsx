import { Accordion } from 'flowbite-react';

export default function CommitmentAccordion({ commitmentData }) {
  return (
    <Accordion collapseAll className='my-1' data-aos="zoom-in-right">
      <Accordion.Panel>
        <Accordion.Title className='bg-orange-500 hover:bg-orange-500 text-white'>
          <div className='flex items-center gap-5'>
            <div className='p-2 bg-white rounded-full'>
              <img className='w-[32px]' src={commitmentData.logo} alt="" />
            </div>
            <p>{commitmentData.title}</p>
          </div>
        </Accordion.Title>
        <Accordion.Content >
          <p>{commitmentData.description}</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
