/*
 * ***** BEGIN LICENSE BLOCK *****
 * Copyright [2014] [Eric Ros] ericrosbh@gmail.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ***** END LICENSE BLOCK *****
 */
 
function initLocales(locale_config)
{
    if (locale_config.indexOf("en") > -1) // english
    {
        HEAVIEST_WARNING = "Your heavy messages take up too much space";
        SHOW_BUTTON = "Show";
        CLEAN_BUTTON = "Clean";
        EXPORT_AND_TAG_BUTTON = "Export and tag";
        HEAVIEST_EXPORT_AND_TAG_TOOLTIP = "Download the 20th heaviest messages and tag them. After the download finishes you can safely delete the tagged messages.";
        OLDEST_WARNING = "Your old messages take up too much space";
        OLDEST_EXPORT_AND_TAG_TOOLTIP = "Download the 1000th oldest messages and tag them. After the download finishes you can safely delete the tagged messages";
        UNREAD_WARNING = "You have too many unread messages";
        UNREAD_ADVICE = "Solution: Check unread messages<br>You can use filters in order to automatically deal with incoming messages. See Preferences > Filters";
        CRITICAL_WARNING = "Your mailbox quota is almost full.";
        CLICK_ON_TAB = "Click on Zimcleaner tab to know more.";
        TAG_NOTIFICATION = "Items successfully tagged. Preparing download...";
        SUGGESTIONS_TITLE = "Suggestions";
        TRASH_WARNING = "Your trash takes up too much space";
        SHOW_MESSAGES_BUTTON = "Show (messages)";
        SHOW_BRIEFCASE_BUTTON = "Show (briefcase)";
        SPAM_WARNING = "Your spam takes up too much space";
        DRAFT_WARNING = "Your drafts take up too much space";
        BRIEFCASE_WARNING = "Your briefcase takes up too much space";
        USER_QUOTA_TITLE = "User quota";
        OF = "of";
        SPACE_USAGE = "space usage";
        USED_SPACE_DETAILS = "Used space details";
        CLIC_TO_SEE_MORE_LABEL = "Click on an element to see more details";
        INBOX = "Inbox";
        TRASH = "Trash";
        DRAFTS = "Drafts";
        SENT = "Sent";
        SPAM = "Spam";
        BRIEFCASE = "Briefcase";
        OTHER = "Other";
        RELOAD_BUTTON = "Analyse again";
        BRIEFCASE_STATUS_MSG = "Briefcase files ordered by size";
        DRAFTS_STATUS_MSG = "Drafts ordered by date";
        SPAM_STATUS_MSG = "Spam folder contents";
        TRASH_BRIEFCASE_STATUS_MSG = "Briefcase elements in the trash";
        TRASH_STATUS_MSG = "Trash emails";
        OLDEST_STATUS_MSG = "Messages ordered by date (oldest first)";
        HEAVIEST_STATUS_MSG = "Messages ordered by size (heaviest first)";
        DONATE_INFO = "Do you found this zimlet useful?";
        // dialogs
        CLEAN_TRASH_CONFIRM = "This will remove all the trash contents, including emails, contacts, appointments and briefcase documents. Are you sure to continue?";
        CLEAN_SPAM_CONFIRM = "This will remove the spam folder contents. Are you sure to continue?";
        CLEAN_DRAFTS_CONFIRM = "This will remove the drafts folder contents. Are you sure to continue?";
        EXPORT_AND_TAG_CONFIRM = "This action will download a compressed file which you can store as a backup (it can be imported in Preferences > Import/Export). The downloaded emails will be tagged. You can delete them when the download finish. Do you want to continue?";
        // tags
        HEAVIEST_MESSAGES_TAG = "heaviest-messages-";
        OLDEST_MESSAGES_TAG = "oldest-messages-";
        // button titles
        SHOW_HEAVIEST_TITLE = "Show messages ordered by size";
        SHOW_OLDEST_TITLE = "Show old messages, ordered by date";
        // random default suggestion
        DEFAULT_SUGGESTIONS = ["If not enough space is freed with ZimCleaner, you can download email folders in Preferences > Import/Export.", 
        "You can export emails in ZIP or TGZ format. The exported file itself contains EML files that can be opened with email clients like Thunderbird or Outlook. You can recover them from Preferences > Import/Export, selecting the compressed file.",
        "Delete the trash contents regularly", 
        "Classify all the incoming messages you can in subfolders and remove emails you don't need."];
    }
    else if (locale_config.indexOf("es") > -1) // es-ES
    {
        HEAVIEST_WARNING = "Los mensajes pesados ocupan demasiado espacio";
        SHOW_BUTTON = "Mostrar";
        CLEAN_BUTTON = "Limpiar";
        EXPORT_AND_TAG_BUTTON = "Exportar y etiquetar";
        HEAVIEST_EXPORT_AND_TAG_TOOLTIP = "Descarga los 20 mensajes más pesados y los etiqueta. Al finalizar la descarga puede borrar los mensajes etiquetados con seguridad.";
        OLDEST_WARNING = "Los mensajes viejos ocupan demasiado espacio";
        OLDEST_EXPORT_AND_TAG_TOOLTIP = "Descarga los 1000 mensajes más antiguos y los etiqueta. Al finalizar la descarga puede borrar los mensajes etiquetados con seguridad.";
        UNREAD_WARNING = "Tiene demasiados mensajes no leídos";
        UNREAD_ADVICE = "Solución: Revisar mensajes no leídos.<br>Puede usar los filtros para ayudarle a lidiar con los mensajes entrantes. Vaya a Preferencias > Filtros";
        CRITICAL_WARNING = "Tu buzón está casi lleno.";
        CLICK_ON_TAB = "Haga clic en la pestaña Zimcleaner para saber más.";
        TAG_NOTIFICATION = "Elementos etiquetados satisfactoriamente. Preparando descarga...";
        SUGGESTIONS_TITLE = "Sugerencias";
        TRASH_WARNING = "Los mensajes en tu papelera ocupan demasiado espacio";
        SHOW_MESSAGES_BUTTON = "Mostrar (mensajes)";
        SHOW_BRIEFCASE_BUTTON = "Mostrar (maletín)";
        SPAM_WARNING = "Tus mensajes de correo no deseado (spam) ocupan demasiado espacio";
        DRAFT_WARNING = "Tus borradores ocupan demasiado espacio";
        BRIEFCASE_WARNING = "Tu maletín ocupa demasiado espacio.";
        USER_QUOTA_TITLE = "Cuota de usuario";
        OF = "de";
        SPACE_USAGE = "espacio usado";
        USED_SPACE_DETAILS = "Detalles del espacio utilizado";
        CLIC_TO_SEE_MORE_LABEL = "Haga clic en un elemento para ver más detalles";
        INBOX = "Bandeja de entrada";
        TRASH = "Papelera";
        DRAFTS = "Borradores";
        SENT = "Enviados";
        SPAM = "Spam";
        BRIEFCASE = "Maletín";
        OTHER = "Otros";
        RELOAD_BUTTON = "Volver a ejecutar análisis";
        BRIEFCASE_STATUS_MSG = "Elementos del maletín ordenados por tamaño";
        DRAFTS_STATUS_MSG = "Borradores ordenados por fecha";
        SPAM_STATUS_MSG = "Contenido de la carpeta de correo no deseado";
        TRASH_BRIEFCASE_STATUS_MSG = "Elementos del maletín en la papelera";
        TRASH_STATUS_MSG = "Correos en la papelera";
        OLDEST_STATUS_MSG = "Mensajes ordenados por fecha (más viejos primeros)";
        HEAVIEST_STATUS_MSG = "Mensajes ordenados por tamaño (más pesados primero)";
        DONATE_INFO = "¿Encontraste útil este zimlet?";
        // dialogos
        CLEAN_TRASH_CONFIRM = "Todos los contenidos de la papelera, includos los correos, contactos, eventos de calendario y documentos del maletín serán eliminados. ¿Desea continuar?";
        CLEAN_SPAM_CONFIRM = "Todos los contenidos de la carpeta de Correo no deseado serán eliminados. ¿Desea continuar?";
        CLEAN_DRAFTS_CONFIRM = "This will remove the drafts folder contents. Are you sure to continue?";
        EXPORT_AND_TAG_CONFIRM = "Esta acción descargará un archivo comprimido que puedes guardar como copia de seguridad. Los correos que hayan sido descargados de esta manera serán etiquetados para que pueda eliminarlos cuando la descarga termine. Quiere continuar?";
        // tags
        HEAVIEST_MESSAGES_TAG = "mensajes-pesados-";
        OLDEST_MESSAGES_TAG = "mensajes-antiguos-";
        // button titles
        SHOW_HEAVIEST_TITLE = "Mostrar mensajes ordenados por tamaño";
        SHOW_OLDEST_TITLE = "Mostrar mensajes antiguos, ordenados por fecha";
        // random default suggestion
        DEFAULT_SUGGESTIONS = ["Si no consigue liberar suficiente espacio con ZimCleaner puede descargarse carpetas de correo en Preferencias > Importar/Exportar.", 
        "Al exportar correos, obtendrá un fichero comprimido en formato ZIP o TGZ, que contiene ficheros EML que pueden ser abiertos con una aplicación de correo como Outlook o Thunderbird. Para recuperarlos en Zimbra debe importar el mismo fichero desde Preferencias > Importar/Exportar.", 
        "Vacíe el contenido de la papelera regularmente", 
        "Intente clasificar todo el correo entrante que pueda y eliminar los que no vaya a necesitar."];
    }
    else 
    {
        initLocales(locale);
    }
}
