<template>

    <!-- Page Wrapper -->
    <div id="wrapper">

        <Sidebar/>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <Navbar/>

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <ContentPageHeader title="Painel de controle"></ContentPageHeader>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->


        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

</template>

<script>

    import Sidebar from './Sidebar';
    import Navbar from './Navbar';
    import ContentPageHeader from './ContentPageHeader';

    export default {

        name: 'Layout',

        components: {
            Sidebar,
            Navbar,
            ContentPageHeader
        },

        props: {}

    }

</script>

<style scoped>

</style>
