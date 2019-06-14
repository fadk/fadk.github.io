<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("G-Energy");
?>



    <div class="action-page">
        <div class="content">
            <div class="page-header">
                <div class="test_title">
                    <div class="title_text">ПОБЕДИТЕЛИ ТЕСТА
                    </div>
                </div>
            </div>
            <div class="page-participants_search-wrapper">
                <form action="<?=SITE_TEMPLATE_PATH?>/action_page.php">
                    <input class="search-input" type="search" placeholder="Волков" name="search">
                    <button class="search-icon" type="submit"><span class="visually-hidden">Search</span></button>
                </form>
            </div>
            <div class="page-participants_table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>ИМЯ ФАМИЛИЯ</th>
                        <th>ГОРОД</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <figure class="page-participants_image">
                                <img src="<?=SITE_TEMPLATE_PATH?>/img/participant-1-min.jpg" alt="">
                            </figure>
                        </td>
                        <td>Александр <span>Волков</span></td>
                        <td>Москва</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>
                            <figure class="page-participants_image">
                                <img src="<?=SITE_TEMPLATE_PATH?>/img/participant-2-min.jpg" alt="">
                            </figure>
                        </td>
                        <td>Аркадий <span>Волков</span></td>
                        <td>Ростов на Дону</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>




<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
